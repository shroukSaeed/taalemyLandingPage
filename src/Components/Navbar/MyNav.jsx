import './MyNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from '../../img/logo.PNG'


export default function MyNav() {
    return (
        <>
            <Navbar expand="lg" className="nav-shadow">
                <Container>
                    <Navbar.Brand className='text-danger' href="#home"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100 d-flex justify-content-between ">
                            <Nav.Link href="#home">كل الدورات</Nav.Link>
                            <Form className="d-flex border w-50 rounded border-secondary-1 p-0">
                                <Form.Control
                                    type="search"
                                    placeholder="ابحث عن دورات ، مواضيع ، او برامج"
                                    className=" border-0"
                                    aria-label="Search"
                                />
                                <Button variant="secondary" className='btn-gray'><i class="bi bi-search text-light"></i></Button>

                            </Form>
                            <Nav.Link href="#link" className='btn-red px-4 ms-3 rounded'>إنضمام مجانـاً</Nav.Link>
                            <Nav.Link href="#link" className='btn-gray px-4 ms-3 rounded'>تسجيل دخول</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
