import React from "react";

class GetRequestAsyncAwait extends React.Component {
    constructor(props:any) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = await response.json();
        this.setState({ users: data })
    }

    render() {
        const { users } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                  <ul>
         users.map((user: any) => (return <li key={user.user_id}>{user.firstname}{user.lastname}</li>))
                        
    
                  </ul>
                </div>
            </div>
        );
    }
}

export { GetRequestAsyncAwait }; 