

export default function User({user}: {user: any}) {
    const {login, avatar_url} = user;
    console.log(user);
    if(user.documentation_url
        === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
    {
        return <h1>Api Please try after some time Rate Limit Exceeded</h1>
    }
    if (user.message === "Not Found") {
        return null;
    }
    
    if (user != null) {
        return (
            <>
                <div className="p-2 bg-red-800 size-auto">
                    <div className="bg-red-200 flex flex-col items-center gap-3 size-auto p-4">
                        <h1>{login}</h1>
                        <img src={avatar_url} alt={login} width="100px"/>
                        <a href={`https://github.com/${login}`}>UserProfile</a>
                    </div>
                </div>
            </>
        );
    }
  
}
