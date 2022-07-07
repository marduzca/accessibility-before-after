import React, {useRef, useState} from 'react';
import './App.css';
import chocolate from "./chocolate.svg";

const NonAccessibleApp = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [areJobsDisplayed, setJobsDisplayed] = useState<boolean>(false);

    const handleSubmit = () => {
        // @ts-ignore
        dialogRef.current?.showModal()
    }

    const closeDialog = () => {
        setName('')
        setEmail('')
        setMessage('')
        // @ts-ignore
        dialogRef.current?.close()
    }

    return (
        <main className="mainContainer">
            <header className="header">
                <img className="chocolate" src={chocolate} alt=""/>
                <p className="heading">Willy Wonka's Chocolate Factory</p>
            </header>
            <div>
                <p className="subHeading">What we do</p>
                <p>We make the best chocolate out there since 1971. Also we have lots of fun singing!</p>
                <p> With the craziest CEO out there, the infamous WILLY WONKA!</p>
            </div>

            <div>
                <p className="subSubHeading">Our chocolate making process</p>
                <div>
                    <p>- Prepare a big bowl</p>
                    <p>- Get your magic cacao from the Amazonian jungle</p>
                    <p>- Do more magic</p>
                    <p>- Delicious chocolate is ready to eat!</p>
                </div>
            </div>

            <div>
                <p className="subHeading">Career</p>
                <button type="button" className="availableJobsButton" onClick={() => {
                    setJobsDisplayed(!areJobsDisplayed)
                }}>
                    <span className={`${areJobsDisplayed && 'arrowUp'}`}>Available jobs</span>
                </button>
                <div className={`jobs ${!areJobsDisplayed && 'hidden'}`}>
                    <span>Chocolate Quality Engineer</span>
                    <span>Software Developer</span>
                    <span>Oompa Loompa</span>
                </div>
            </div>

            <div>
                <p className="subHeading">Contact</p>
                <div className="form">
                    <span>Name</span>
                    <input required id="name" type="text" name="name" value={name} onChange={(event) => {
                        setName(event.target.value);
                    }}/>

                    <span>Email</span>
                    <input required id="email" type="email" name="email" value={email} onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>

                    <textarea className="message" required name="message" value={message}
                              onChange={(event) => {
                                  setMessage(event.target.value);
                              }}/>

                    <button type="button" onClick={handleSubmit}>Send</button>
                </div>

                <dialog ref={dialogRef}>
                    <span>The form was submitted successfully with data:</span>
                    <dl>
                        <dt>Name:</dt>
                        <dd>{name}</dd>
                        <dt>Email:</dt>
                        <dd>{email}</dd>
                        <dt>Message:</dt>
                        <dd>{message}</dd>
                    </dl>
                    <button type="button" onClick={closeDialog}>Confirm</button>
                </dialog>
            </div>
        </main>
    );
};

export default NonAccessibleApp;
