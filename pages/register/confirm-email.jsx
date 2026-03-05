const ConfirmEmail = () => {

    const resendMail = async () => {
        console.log("Hello World");
    }

    return ( 
        <>
        <section className="h-max w-full sm:p-20 p-10">
            <div className="h-max w-full mb-5">
                <p className="text-center text-sm">A verification message has been sent to your email address. If you did not recieve any mail, click the resend button</p>
            </div>
            <div className="h-max w-full flex items-center justify-center">
                <button type="button" onClick={resendMail} className="text-primary">Resend Mail</button>
            </div>
        </section>
        </>
     );
}
 
export default ConfirmEmail;