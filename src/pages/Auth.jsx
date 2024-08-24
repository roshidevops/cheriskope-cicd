import React from 'react'
import '../css/Auth.css'
import { Link, NavLink } from 'react-router-dom'
import { FaFontAwesome } from 'react-icons/fa'


export default function Auth() {
  return (
    <>


      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card my-5 ">

                <div className="card-body cardbody-color p-lg-5">
                  <div className="text-center">
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                      width="70px" alt="profile" />
                    <h3 className="text-center text-dark  mb-3" style={{
                      fontStyle: "italic", fontWeight: "bolder"
                    }}>Login to periskope</h3>


                    {/* <button to={"/admin/dashboard"} className='btn btn-outline-primary w-100 mb-1'> <FaFontAwesome  icon="fa-brands fa-google"  /> Continue With Google</button> */}
                    <Link to={"/admin/dashboard/"} className='btn btn-outline-primary w-100 mb-1'> <FaFontAwesome  icon="fa-brands fa-google"  /> Continue With Google</Link>
                  </div>
                </div>

                <hr />


                <form className="card-body cardbody-color p-lg-5" >


                  <div className="mb-3">
                    <input type="email"
                      className="form-control"
                      id="email"
                      name='email'
                      placeholder="Email Your Official Email Address"
                    />
                  </div>

                  <button className='btn btn-outline-secondary w-100 mb-3'> Continue With Email</button>

                </form>

                <footer>
                  <p className='text-center text-secondary mt-4 w-70'>By signing up, You Agree to Periskope's Terms and Private Policy.</p>
                </footer>

              </div>

            </div>
          </div>
        </div>
      </>

    </>
  )
}
