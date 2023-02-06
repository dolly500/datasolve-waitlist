import { ReactComponent as Mail } from 'assets/icons/mail.svg'
import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import styled from 'styled-components'
import './style.css'


const ContactStyle = styled.div`
  margin-top: 20px;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    margin-left: 23px;
  }
`

function Contact() {
  return (
    <>
      <ContactStyle>
        <Mail />
        <span>support@datasolve.ng</span>
      </ContactStyle>
      <ContactStyle>
        <Phone />
        <span>+2349035793867</span>
      </ContactStyle>

      {/* <h4 className="add-1">
      Dear Researcher, Unlock the power of real-life data with Data Solve. Connect with a diverse pool of participants and gather insights that drive meaningful impact.
      </h4> */}
    </>
  )
}

export default Contact
