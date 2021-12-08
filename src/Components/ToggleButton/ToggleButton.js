import { Form } from "react-bootstrap";

const ToggleButton = () => {
  return (
    <Form>
      <Form.Check type="switch" id="custom-switch" />
    </Form>
  );
};

export default ToggleButton;
