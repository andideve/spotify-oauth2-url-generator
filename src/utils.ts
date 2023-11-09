import qs from 'query-string';

export function generateOAuth2URL({
  client_id,
  scopes,
  redirect_uri,
}: {
  client_id: string;
  scopes: string[];
  redirect_uri: string;
}) {
  return `https://accounts.spotify.com/authorize?${qs.stringify({
    response_type: 'code',
    client_id,
    scope: scopes.join(' '),
    redirect_uri,
  })}`;
}

export function copyToClipboard(data: string) {
  return window.navigator.clipboard.writeText(data);
}
