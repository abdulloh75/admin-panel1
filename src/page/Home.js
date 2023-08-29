import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';



const Home = () => {

  const [imgs, setImgs] = useState()
  axios.get('https://alcrm.pythonanywhere.com/api/v1/custom-admin/')
    .then(data => console.log(data))
    .catch(err => {
      // console.log(err);
      if (err.code === "ERR_NETWORK") {
        console.log('server bilan bog\'lanib bo\'lmadi! ');
      }
    })
  function image() {
    let my_image = document.getElementById('my_image');
    my_image.click()
  }

  const handleChnage = (e) => {
    const data = new FileReader()
    data.addEventListener('load', () => {
      setImgs(data.result)
    })
    data.readAsDataURL(e.target.files[0])
  }
  return (
    <div className='input_data'>
      <h1>Add admin</h1>
      <div className='input_file'>
        <input className='Input' id="my_image" type='file' onChange={handleChnage} />
        <img className='img' onClick={image} src={!imgs ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEX///8AAABLS0sHBwdzc3Nvb2+np6cLCwuPj4/39/cXFxfv7+/Ly8vHx8fPz88nJyecnJzm5ubW1tb5+fne3t6wsLAREREtLS0iIiJcXFzk5OSCgoJhYWFBQUE4ODi7u7saGhqGhoZTU1Oenp57e3u/v79GRkYzMzNqamqNjY0C+Vz8AAALkklEQVR4nO1daXuqOhBuRVGkIotS961a2///B+91yWQCySRAID3P4/vt9GDIS2bLZJK8vb3wwgsvvPDCCy+88A8iifb+aH3u//z8DPrn9cjfR4nrPlVDMIkHvan3LsHwszeIPwLXPTRAGi+nMgYipps4dd1TAqv4lOtJMOSnrz8padH505wEw+f6jw3MbF2DBeMyc917hszf1mXxwPc8c83hfyTnCnqhwvjsWl3SjdTKVoe3cakt0Unds8V2s47nl3SVhEEQJqv0Mo/Xm+1C/YuTKyqpgoa3G3ypfV7wEQ92imFcutD78EdK4vs4MdDc4HLcysh4g7D9ngvIRhIVH//MKwQf4XwjaSOP2+u0BJOy28g3+8rNZPvNsNTQNWqhw3IEg9Lbt181A8Hga1dqrN9RUHkpWh7vp5G9iUomfDGx1VcC2bkoU+vGzqzsVM82ukpidi3QOFqRg3BdUJZdy5Z4Lr7PO1szl+FZFLC8uu2ogIJYLVc2G58VHOzaZuMCwp7wok/rKnkRJ5e9lqzXSnAe3rqF2DsT5evaSkwcHQRlbCnCSwVjcmjhLRdBzc+tTYWyPn7P0Lr47vGYt+uwLnjoh5aN1xzz+G45RE3w1Nmb22xa4NG+180GLTHBcuX59tpV4wu/0Zp0XVCreRfx3O2dKPqypfERsleLzubVKVL53MpbV6jFqdWYhMYMzRYWFjxjiPz5Z6fZpwQFLNfm0QqKrz47zgxgJqemja2RXHWeDVwh6To2a2qO5LRD/WCYIf1sZIRn3AjasRxVgSxm3uRD8gyHd7HWuUpAvnhbvxWkIJ34cxliC2oy4W30bfatGnhq1vuo10LArV+DUW2MjMv3tN4siGcaDk6XYZIxdKRW4B1xNXOk6Ax7Llx1TOe12XewCT492VX/MbcWV+dLlRmP976q/jYEwaw1nJbxwdW1avTIcxkywcriU68lnL5kAkB3h8AMNF1m8oLymoZFbCUfPYDw0asWqWygWZnF6ks7YA2yj86j158qPPiASOcBxBqzDSxk7/xm/+tVWXBY0r+yVCSgwlD2zhReujHnMYM25TGWCyI85qqgJeCAhvLJrRMiCbzVOIINYTajsHVOiHATo/i8ZRzZL3LFL9wQSeD7mk5MwCipxhCI9PoWsdUQ4RIvNWtlQLCp1CogYnXeONIR4TbILBEBa5JL1ROOiPCeGWW5uHVQFoW4IgJzb89kpgftXZWPuCLyBuH8yKA9CAjVBUfOiMAjBkkE0CjCWjsjEsKb9d79V6vqDolwddfLFkgWsXTnjohvLFshezInZupWiKR+7AuzaBMiAfPuni5MAcqEZNkgEj+yf1OUTDAhwmVLt9a7MeljYyIhTJPee/BpjYh8sYd0E0WIs6iha0pEmPNvmQwbEUnYQ5p4a8WeIzNhTYmIc342VzAiwn0i7dz9YutSNCSSiNMAFm+YEYGPQCsJRMpkfNmQyOhdxKjwZ5IIpFMG5DtAeEnr1pBIsab+aSDNiIB/oNPArIufRk/VJFJM7z2dmxmRt6nJUylri065NCRS3ABUjQikqqj8Fug6Hco0JMLTmA88XYIhEQgGKW2H1U96aachEf9dxLNHhkRgJk6V08Kw0ZFMQyIBX0u74fD0iIZEwCVSQRRTw5zuSVOHKA4JExFDIm8sbqQCYFYxoZ7l3tE41sKuHVyvKRHm2w/qRzLWlCZLoSFisHY6Yk143KyYEoF6JfVEA6a5muwqTSQ1KaecDW7h6aKPpqymRCD6UE93Yanul26KJrJ7PxglZ8OZ+JgpkSN7Tr2HCSybZu2UJHLrT6VVJfxDEyKw3qyOB8GaaGSDIrK6G5U6daGmRObE24tNafpBEXmoYp2qEVMiF/acOvEG3l+zg44gwga1OJ8x0H9TIqDJ6jgK1EhTI6AmErKSu0KZwYc2WWBOBCJb9TIJhFqahVM1EYhxxOlC9mlgySoTUQdbUNikSXYrifA6HnHgb0OttWSmRMDbqafjQESTWVURCfAC/JA38li21zl8i0Saipa49bUHf3/MpHSWzKJoHdkj9ZQd1UAK/8s8mKYexpRIxJ5TKzs0Vcv8ZsUt1c9F4QQsGd2sRfMLzr+WQ0TFtU88pj48aULPDrKAgX67gUNsFKKkYtrtjns0hI4iMFkx08KXvV1Eo6BRVsO1uH3ckBe4D21sJQa5UZtBUKMaYXwxffjAPR2Idgp8WyACIqxWuZXw/kpEVuUzD+64axtKLVYuriwDRFXtthtMdcX9yByfN+eRoE0PdNAQMRDPsLUVj3iGeWY6YyohUkxVcdy9FqrUp5I4bwE8RkRmLGdKrZCwZKbGkpeIhGKmCuMRBqMsKWURjYiwt1PpIEhm0gJQIlJMgmLc38eLJMnKXRMiEGpR+ekje4guvykSwUFvGbHQMhkGmxABG0hVbRk9VCIS0FWnw9vwZmifujpuMCEC1pf62GB/SZUsEtGVAd9tIK8Kf1iy2kTAlpNzDWYn6TVTkQjqogJ+ga4y/jYhwuIEOj8N1oXUdoFIKegtY3zrFhJA5b4BAyIgNHQRB8wRybARiBym06lJWfbtuSnaD53f/j0tez0DImbrzlzbyeyvpSrTstIbEIEAhTassGZK+naXRIxKM964/ydtgkMi4A41URTPH1Anj1kl8oHAZ/0X/Gf0apgt6OrKwUn3iIdsEgn0z+HhgbIiXelvAEtJBmFb90SgqHGozZIDZWIK5I4IzAcogTF/1B0RcNj6mSYMHlHt7IwIuHVtSeMbki11BOyMCES+eslCVYPqwNEZEfCGJjkMvp9HaeFcEYEAami0PxTmrcrxs0kkG2PA/wl/ZURA1c02vnH3qoq2HYUokD98NzxqACYYKuKOiMC6ni7OYgBXotqb5IYIz8SYnkDL66kUCQ83RGBAxsaL+GCuFftinRCBFbcKx4rw/SbybIolImsfIdQRgeyJ8X7KN5zxkNqHNjZUFpxKqbOwTlVpaz7fhCktEza4BsI6EUjwVRkQfCaKbH3r990+NER4Pr/aWQlQU/I+Ji16V0T4Cotq/7AK/KNLveLlPLCMGUmEf7mq66kZ14MOz6lREeGrkKZOXfbbRXdHz2WlOPEOtC5c49wzvipIp+Y7AF9MrXOmHlqndXZK2APcYmmWUhXgK+dDp6fuoHPoat5XgE7ocnhhU8jT/XXPK5vxT9H4vMf64Lqa1y4AgTxEm2efa4BOeG+gqicrrTSBaamBBkg+3RzUiI5pnDZyZ+ggury7e0EAE66lTS0nKjLp/hDQCC07NhZtVDk67phJiipcLJx42XPFJEI8bJj/ABVf5DUP4ayDCZKrnRWHnKCV9GFntmuPjxS3dHLnDI2xZ6GWzwQxSnAcrN0Ok+IrdDo5RxPX6djUTGwH30+tT7SEG1vs+i+BybRl4xXh8paxZT+cCndptHqPGVaPFq5SmQlVQO2Jl3gR0KKFW6AS8dKZlm5nmosX6LRyYnIgFikvWxiURDwO4tTWxFQsXrR/418s3pTWoqH3xQr4q1U/vxdrCodW77QpIi0U/tm75zMqVNe3bePDYv7azj2fpftHN+3nbfzilX+nxiHxpEgj7yRDMCtdbLxtclVxNi/tBfru6mKNuHRr6eFcU8Jm59JGh7yjAPuGRHKl7m5U2XutRpKNWcturw24yOqvt78VIrzoKNteZteiGyGWbn45bGIDu5nGy4Ps1+Nub9V9Ijgq7gHPe2c/Vah/Fvn9b9Xv7Nw/WgMhdaX5YbfsH+P5/vIRRR+X/Tw+9pc76Tg8aay7vq5ZoPJLdK0KFiOHKxd3ZL6FY/13jtfEnkgHhITpkff/wDUUTwTzk2JnqA7DZZOooA0E/rLyuIyXVe5B7xCT9c64cMjbrjvMv1ZHNjmetJuVFqffyR8TKDnCSdw/XSWSll9P/XjyN8WJQLaKLr4fx6NR/OXPL1HyT4zCCy+88MILL7zwwgsl/AevWZuEDTsS6wAAAABJRU5ErkJggg==" : imgs}/>
      </div>
      <br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="+998" />
          <Form.Text className="text-muted">
            Telefon raqamni kiriting:
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Parol:" />
          <Form.Text className="text-muted">
            Parolni kiriting:
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Ism:" />
          <Form.Text className="text-muted">
            Ism kiriting:
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Familiya:" />
          <Form.Text className="text-muted">
          Familiya kiriting:
          </Form.Text>
        </Form.Group>
        <Row className="mb-3">
          <Col md>
              <Form.Select>
                <option>Admin turi</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Admin turini tanlang:
            </Form.Text>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Home
