// import { ReactComponent as Star } from 'assets/icons/star.svg'
import Button from 'components/Basic/Button'
import BasicInput from 'components/Input/BasicInput'
import useForm from 'hooks/useForm'
import styled from 'styled-components'
// import { device } from 'styles/BreakPoints'
import { Helmet } from "react-helmet";
import { Box } from 'styles/Global'
import './index.css'

const FormStyle = styled.form``

// const TextStyle = styled.span`
//   font-size: 10px;
//   color: ${({ theme }) => theme.colors.text};
//   svg {
//     margin-right: 16px;
//   }
//   @media ${device.sm} {
//     display: none;
//   }
// `

const Form = ({ handleAddedInList }) => {
  const { user, onChangeInput, onSubmitForm } = useForm({ name: '', email: '', phonenumber: '' })

  const submitForm = () => {
    handleAddedInList()
    onSubmitForm()
  }

  const { name, email, phonenumber } = user

  return (
    <FormStyle onSubmit={submitForm} className="launchlist-form"
    action="https://getlaunchlist.com/s/MsuuEhz"
    method="POST">
      {/* <BasicInput
        label="Name"
        name="name"
        value={name}
        onChange={onChangeInput}
        type="text"
        placeholder="Your Name"
      />
      <BasicInput
        label="Email"
        name="email"
        value={email}
        onChange={onChangeInput}
        type="email"
        placeholder="Your Email"
        required
      />

      <BasicInput
        label="Phone number"
        name="phonenumber"
        value={phonenumber}
        onChange={onChangeInput}
        type="nphonenumberumber"
        placeholder="Your phone number"
        required
      /> */}
      {/* <Box mt={50} flxRight smNone>
        <TextStyle>
          <Star />
          Required field
        </TextStyle>
      </Box> */}
      {/* <Box mt={40} flxRight>
        <Button type="submit" title="Join the waitlist" />
      </Box> */}

      
      <form
    className="launchlist-form"
    action="https://getlaunchlist.com/s/MsuuEh"
    method="POST">
    <label for="First Name" className="form_1">First name:
      <input name="name" type="text" placeholder="Enter your first name" />
    </label>


    <label for="Last Name" className="form_1">Last name:
      <input name="name" type="text" placeholder="Enter your last name" />
    </label>

    <label for="email" className="form_1">Email Address:
      <input name="email" type="email" placeholder="Enter your email" />
    </label>
    
    <button className="form_1" type="submit">Join Waitlist</button>
</form>

      <h3 className="add-2">
      Dear Participant,
Be a part of shaping the future of research with Data Solve. Share your experiences and perspectives with researchers and contribute to ground-breaking discoveries while also earning rewards for your time.
      </h3>

      <button className="form_2" type="submit">Become a participant today</button>
      <Helmet>
        <script
          src="https://getlaunchlist.com/js/widget.js"
          type="text/javascript"
          defer
        />
      </Helmet>

      
    </FormStyle>

    
  )
}

export default Form
