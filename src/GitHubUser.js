
import useGitHub from "./hooks/useGitHub";

const GitHubUser = ({ username }) => {
    //https://api.github.com/users/sbishoyi-dev

    const {user, loading, error} = useGitHub(username);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {
                user && (
                    <ul>
                        <li>
                            <img src={user.avatar_url} alt={user.login} />
                        </li>
                        <li>
                            <strong>Name:</strong> {user.name}
                        </li>
                        <li>
                            <strong>Bio:</strong> {user.bio ? user.bio:"NA"}
                        </li>
                        <li>
                            <strong>Location:</strong> {user.location ? user.location:"NA"}
                        </li>
                        <li>
                            <strong>Blog or Site:</strong> {user.blog ? user.blog:"NA"}
                        </li>
                        <li>
                            <strong>Public Repos:</strong> {user.public_repos ? user.public_repos : 0}
                        </li>
                    </ul>
                )
            }
        </div>
    )
}

export default GitHubUser;