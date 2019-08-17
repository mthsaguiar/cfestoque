import React from 'react'
import './notifications.css'


const Notify = (props) =>{
        return(
        <div>
                <div className="notfications-container">
                    <ul>
                        <li>
                            <footer>
                            <strong>Operação realizada</strong>
                            <p>Características da operação realizada</p>
                            </footer>
                         </li>
                         <li>
                            <footer>
                            <strong>Operação realizada</strong>
                            <p>Características da operação realizada</p>
                            </footer>
                         </li>
                         <li>
                            <footer>
                            <strong>Operação realizada</strong>
                            <p>Características da operação realizada</p>
                            </footer>
                         </li>
                         <li>
                            <footer>
                            <strong>Operação realizada</strong>
                            <p>Características da operação realizada</p>
                            </footer>
                         </li>
                    </ul>

                </div>    

        </div>
        );
    }
export default Notify;
