'use client';
import './page.css';
import { useId } from 'react';

import { SCOPES } from '@/config/constants';
import * as Form from '@/components/ui/form';
import Input from '@/components/ui/input';
import Checkbox from '@/components/ui/checkbox';
import Button from '@/components/ui/button';
import { generateOAuth2URL, copyToClipboard } from '@/utils';

const INPUTS_NAMES = {
  client_id: 'client_id',
  scopes: 'scopes',
  redirect_uri: 'redirect_uri',
};

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const url = generateOAuth2URL({
    client_id: data.get(INPUTS_NAMES.client_id) as string,
    scopes: data.getAll(INPUTS_NAMES.scopes) as string[],
    redirect_uri: data.get(INPUTS_NAMES.redirect_uri) as string,
  });

  copyToClipboard(url).then(() => {
    window.alert('Copied to clipboard!');
  });
}

export default function Home() {
  const id = useId();
  const ids = {
    client_id: `${id}--client_id`,
    redirect_uri: `${id}--redirect_uri`,
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="card">
            <header className="card__header">
              <h2 className="card__heading">OAuth2 URL Generator</h2>
            </header>
            <Form.Root onSubmit={onSubmit}>
              <Form.Field>
                <Form.Label htmlFor={ids.client_id}>Client ID</Form.Label>
                <Input
                  id={ids.client_id}
                  name={INPUTS_NAMES.client_id}
                  autoComplete="off"
                  required
                />
              </Form.Field>
              <Form.Fieldset>
                <Form.Legend>Scopes</Form.Legend>
                <div className="scopes-grid">
                  {SCOPES.map((scope) => (
                    <Checkbox
                      key={scope}
                      label={scope}
                      name={INPUTS_NAMES.scopes}
                      value={scope}
                      containerClass="scopes-grid__column"
                    />
                  ))}
                </div>
              </Form.Fieldset>
              <Form.Field>
                <Form.Label htmlFor={ids.redirect_uri}>Redirect URI</Form.Label>
                <Input
                  id={ids.redirect_uri}
                  name={INPUTS_NAMES.redirect_uri}
                  autoComplete="off"
                  placeholder="https://example.org/callback"
                  required
                />
              </Form.Field>
              <Form.Footer>
                <Button type="submit">Generate URL</Button>
              </Form.Footer>
            </Form.Root>
          </div>
        </div>
      </section>
    </main>
  );
}
