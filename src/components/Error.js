import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    console.log('hello');
    return (
        <div>
            <h1>OOPS !!! Something went wrong 🤔</h1>
            <h1>
                {err.status}: {err.statusText}
            </h1>
        </div>
    );
};

export default Error;
