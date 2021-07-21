import React from 'react';

import './Log-in.styles.scss';

class LogIn extends React.Component {
    render() {
        return (
            <div className='log-in'>
                <h2>Login</h2>

                <form>
                    <formInput
                        name='email'
                        type='email'
                        value='email'
                    />

                </form>
            </div>
        )
    }
}
export default LogIn;