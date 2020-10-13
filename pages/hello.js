import useSWR, {mutate} from 'swr';

function login() {
  document.cookie = "authenticated=yes"
  mutate('/api/hello')
}

function logout() {
  document.cookie = "authenticated=no;max-age=0"
  mutate('/api/hello')
}

export default function HelloPage() {
  const { data, error, isValidating, revalidate } = useSWR('/api/hello');

  const loggedIn = typeof document !== "undefined" && document.cookie.length > 0;

  return <div>
    <button onClick={revalidate}>Request Again</button>
    <button onClick={loggedIn ? logout : login}>{loggedIn ? "Log out" : "Log in"}</button>
    <p>Logged in? {loggedIn ? "Yes" : "No"}</p>
    <p>Validating? {isValidating ? "Yes" : "No"}</p>
    <p>Data:</p>
    <pre>{JSON.stringify(data)}</pre>
    <p>Error:</p>
    <pre>{JSON.stringify(error)}</pre> 
  </div>
}
