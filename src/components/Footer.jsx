import React from 'react'

function Footer() {
  return (
    <>
        <footer className="pc-footer">
          <div className="footer-wrapper container-fluid">
            <div className="row">
              <div className="col my-1">
                <p className="m-0">Copyright © <a href="" target="_blank">Ultron Technologies</a></p>
              </div>
              <div className="col-auto my-1">
                <ul className="list-inline footer-link mb-0">
                  <li className="list-inline-item"><a href="" target="_blank">Home</a></li>
                  <li className="list-inline-item"><a href="" target="_blank">Privacy Policy</a></li>
                  <li className="list-inline-item"><a href="" target="_blank">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer