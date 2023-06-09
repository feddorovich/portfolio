import React, { FC, useRef, useState } from 'react'
import style from './Contacts.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'
import { SocialIconsFooter } from './SocialIconsFooter/SocialIconsFooter'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { Alert } from './Alert/Alert'

export const Contacts: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      setIsLoading(true)
      emailjs
        .sendForm('service_zbupw4l', 'template_ulaar7c', form.current, 'J3VuL-G6B0KqO8oIH')
        .then((result: EmailJSResponseStatus) => {
          setMessage('Your message has been successfully delivered.')
          form.current?.reset()
        })
        .catch((error) => {
          setMessage('Error sending message. Write to feddorovich@outlook.com.')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <section className={style.contactsBlock} id={'contacts'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__fadeInLeft'} threshold={0.1}>
            <div className={style.getInTouch}>
              <h2>Let's get in touch</h2>
              <p>
                Thank you for visiting my portfolio page! If you are looking for an experienced and talented front-end
                developer who can help you create a unique and functional web interface, then you are in the right
                place.
              </p>
              <p>
                If you have any questions, comments, or proposals, please do not hesitate to contact me through the
                contact form. I will be happy to discuss all the details.
              </p>
              <h3>
                Write:
              </h3>
              <h4>
                feddorovich@outlook.com
              </h4>
              <div className={style.icons}>
                <SocialIconsFooter />
              </div>
            </div>
          </Animation>
          <Animation animation={'animate__fadeInLeft'} threshold={0.1}>
            <div className={style.form}>
              {isLoading && (
                <div className={style.loadingWrapper}>
                  <div id={'hw15-loading'} className={style.loading}></div>
                </div>
              )}
              <h2>Contact</h2>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">What is Your Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5} required></textarea>

                <button type="submit">
                  Send
                </button>
              </form>
            </div>
          </Animation>
        </div>
      </Container>
      <Alert message={message} />
    </section>
  )
}
