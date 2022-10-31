import MailchimpSubscribe from "react-mailchimp-subscribe"
import React from 'react'
import {NewsLetter} from "./NewsLetter"

export const MailchimpForm = ()=> {

    const url = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
        <div>
            {/* <MailchimpSubscribe 
            url={url}
            render={({ subscribe, status, message }) => (
                <NewsLetter
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )} 
            /> */}
        </div>
    )
}
