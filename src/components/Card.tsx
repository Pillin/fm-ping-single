import styled from '@emotion/styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import { H1, H2, Span } from "./Typography";
import { PrimaryButton } from "./Buttons";
import { IMG } from "./Image"
import Social from "./Social"

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email address').required('Required')
});

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px 0px;
  > form {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Row = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  max-width: 640px;
  gap: 0px 16px;
  margin: 16px 0px;


  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Card = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <IMG mobile={"/images/logo.svg"} desktop={"/images/logo.svg"} alt="" style={{ width: "90px" }} />
      <H1>We are launching <b>soon!</b></H1>
      <H2>Subscribe and get notified</H2>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Input
            onChange={(e: Event) => { formik.setFieldTouched("email"); formik.handleChange(e) }}
            name="email"
            error={formik.touched.email ? formik.errors.email || "" : ""}
            value={formik.values.email} />
          <PrimaryButton>Notify Me</PrimaryButton>

        </Row>
      </form>
      <IMG
        mobile="/images/illustration-dashboard.png"
        desktop="/images/illustration-dashboard.png"
        alt=""
        style={{ width: "100%", maxWidth: "640px", aspectRatio: "640 / 383", margin: "32px 0px" }}
      />
      <Social />
      <Span>© Copyright Ping. All rights reserved.</Span>
    </Container>
  );
}

export default Card;
