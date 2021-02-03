import React from "react"

const MailchimpForm = () => {
  return (
    <form name="mailchimp" method="POST" data-netlify="true" netlify-honeypot='bot-field'>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact"/>
      <input type="hidden" name="bot-field"/>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default MailchimpForm
