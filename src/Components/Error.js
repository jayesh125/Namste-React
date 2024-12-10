import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>{error.status}: {error.statusText}</h1>
            <p>{error.message}</p>
        </div>
    )
}

export default Error;