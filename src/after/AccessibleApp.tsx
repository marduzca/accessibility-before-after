import React, {useRef, useState} from 'react';
import './AccessibleApp.css';
import chocolate from '../before/chocolate.svg';


const AccessibleApp = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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
                <img className="chocolate" src={chocolate} alt="Chocolate bar" aria-hidden="true"/>
                <h1 className="heading">Willy Wonka's Chocolate Factory</h1>
            </header>
            <section aria-labelledby='what-we-do'>
                <h2 id='what-we-do' className="subHeading">What we do</h2>
                <p>We make the best chocolate out there since 1971. Also we have lots of fun singing!</p>
                <p> With the craziest CEO out there, the infamous WILLY WONKA!</p>
            </section>

            <section aria-labelledby='process'>
                <h3 id='process' className="subSubHeading">Our chocolate making process</h3>
                <section>
                    <ul>
                        <li>Prepare a big bowl</li>
                        <li>Get your magic cacao from the Amazonian jungle</li>
                        <li>Do more magic</li>
                        <li>Delicious chocolate is ready to eat!</li>
                    </ul>
                </section>
            </section>

            <section aria-labelledby='career'>
                <h2 id='career' className="subHeading">Career</h2>
                <section>
                    <details>
                        <summary>Available jobs</summary>
                        <ul>
                            <li>Chocolate Quality Engineer</li>
                            <li>Software Developer</li>
                            <li>Oompa Loompa</li>
                        </ul>
                    </details>
                </section>
            </section>

            <section aria-labelledby='contact'>
                <h2 id='contact' className="subHeading">Contact</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input required id="name" type="text" name="name" value={name} onChange={(event) => {
                        setName(event.target.value);
                    }}/>

                    <label htmlFor="email">Email</label>
                    <input required id="email" type="email" name="email" value={email} onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>

                    <textarea className="message" required aria-label="message" name="message" value={message}
                              onChange={(event) => {
                                  setMessage(event.target.value);
                              }}></textarea>

                    <button type="submit">Send</button>
                </form>

                <dialog role="alertdialog" ref={dialogRef}>
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
            </section>
        </main>
    );
};

export default AccessibleApp;
