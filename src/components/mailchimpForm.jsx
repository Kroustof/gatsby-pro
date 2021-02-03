import React from "react"

const MailchimpForm = () => {
  return (
    <form name="mailchimp" method="POST" data-netlify="true" data-netlify-honeypot='bot-field'>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <input type="hidden" form-name="form-name" value="contact"/>
      <input type="hidden" form-name="bot-field"/>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default MailchimpForm
