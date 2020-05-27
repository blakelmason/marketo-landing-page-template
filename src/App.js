import React from 'react'
import mktoVariables from './variables'
import MktoButton from './components/MktoButton'
import Container from './components/Container'
import MktoText from './components/MktoText'
import MktoForm from './components/MktoForm'
import MktoImage from './components/MktoImage'

function App() {
  const height1 = 500
  const height2 = 400
  const dividerMargins = 75

  const bubbles = [
    'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-one-172x172.png',
    'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-two-172x172.png',
    'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-three-172x172.png',
  ]

  return (
    <>
      <main>
        <div className="text-center p-3">
          <MktoImage name="Logo">
            <img
              src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-cornell-cookson-logo-525x82.png"
              alt="logo"
              style={{ maxHeight: 50, maxWidth: '100%' }}
            />
          </MktoImage>
        </div>
        <div className="position-relative">
          <div
            className="d-flex align-items-center mb-5 position-relative"
            style={{
              height: height1,
            }}
          >
            <div
              className="position-absolute w-100"
              style={{ height: height1 }}
            >
              <MktoImage name="Section 1 Background Image">
                <img
                  src="http://info.cornellcookson.com/rs/256-VME-936/images/header-image-1920x664.jpg"
                  alt="header"
                  className="w-100"
                  style={{
                    height: height1,
                    objectFit: 'cover',
                    objectPosition: '100%',
                  }}
                />
              </MktoImage>
            </div>
            <Container>
              <div className="row no-gutters w-100 text-white">
                <div className="d-none d-xl-block col-12 col-xl-6" />
                <div className="col-12 col-xl-6 h-100 pl-xl-5 d-flex  flex-column align-items-center d-xl-block">
                  <h1 className="header-text mb-4 mb-sm-2">
                    <MktoText name="Section 1 Header" />
                    <div
                      style={{
                        position: 'relative',
                        width: 60,
                        left: 2,
                        borderBottom: '2px solid white',
                      }}
                    />
                  </h1>
                  <div
                    className="mb-4 header-detail"
                    style={{ textJustify: 'inter-word', textAlign: 'justify' }}
                  >
                    <MktoText name="Section 1 Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </MktoText>
                  </div>
                  <MktoForm id="form1" name="Form 1" />
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <div className="text-center mb-5">
              <h4>
                <MktoText name="Section 2 Header" />
              </h4>
              <div>
                <MktoText name="Section 2 Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </MktoText>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-6 mb-5 mb-xl-0 d-flex flex-column justify-content-between">
                <h4>
                  <MktoText name="Section 3 Header" />
                </h4>
                <div
                  style={{ textJustify: 'inter-word', textAlign: 'justify' }}
                >
                  <MktoText name="Section 3 Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </MktoText>
                </div>
                <div className="text-center text-xl-left my-5 my-xl-0">
                  <MktoButton id="button1" style={{ width: 200 }}>
                    BUTTON 1
                  </MktoButton>
                </div>
              </div>
              <div className="col-12 col-xl-6 d-flex justify-content-center">
                <MktoImage name="Section 3 Image">
                  <img
                    className="img-fluid m-auto d-block"
                    src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-laptop-preview-600x360.png"
                    alt="laptop"
                  />
                </MktoImage>
              </div>
            </div>
            <MktoImage name="Divider">
              <img
                src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-gray-divider-line-1366x47.png"
                className="img-fluid"
                style={{
                  marginTop: dividerMargins,
                  marginBottom: dividerMargins,
                }}
                alt="divider"
              />
            </MktoImage>
            <h4 className="text-center mb-5">
              <MktoText name="Section 4" />
            </h4>
            <div className="row">
              {bubbles.map((image, i) => (
                <Bubble image={image} i={i} key={'bubble-' + i} />
              ))}
            </div>
            <div className="text-center mb-5 mt-xl-5">
              <MktoButton id="button2" style={{ width: 200 }}>
                Button 2
              </MktoButton>
            </div>
          </Container>
          <div className="mb-2">
            <div
              className="w-100 position-absolute"
              style={{ height: height2 }}
            >
              <MktoImage name="Section 6 Background 1">
                <img
                  src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-cta-background-section-1920x398.png"
                  alt="cta-background"
                  className="position-absolute mt-auto"
                  style={{
                    height: height2,
                    width: '100%',
                    objectFit: 'cover',
                    bottom: 0,
                  }}
                />
              </MktoImage>
            </div>
            <Container>
              <div
                className="row"
                style={{
                  height: height2,
                }}
              >
                <div className="col-12 col-lg-7 h-100 w-100 text-dark py-4">
                  <div className="h-100 text-center d-flex flex-column justify-content-center align-items-center text-white px-4 position-relative">
                    <div className="w-100 h-100 position-absolute d-flex">
                      <MktoImage name="Section 6 Background 2">
                        <img
                          className="w-100 h-100"
                          src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-message-background-761x347.png"
                          alt="message-background"
                          style={{ zIndex: 0 }}
                        />
                      </MktoImage>
                    </div>
                    <div style={{ zIndex: 1 }}>
                      <MktoImage name="Section 6 Icon">
                        <div>
                          <img
                            src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-chat-icon-circle-88x90.png"
                            alt="chat-icon"
                            className="mb-4"
                          />
                        </div>
                      </MktoImage>
                      <h5 className="mb-4">
                        <MktoText name="Section 6 Header" />
                      </h5>
                      <div style={{ maxWidth: 400 }}>
                        <MktoText name="Section 6 Text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </MktoText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-dark text-light text-center pt-5 pb-5 px-3">
          <h5 className="mb-2">
            <MktoText name="Section 7 Header" />
          </h5>
          <div className="mx-auto mb-4" style={{ maxWidth: 500 }}>
            <MktoText name="Section 7 Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </MktoText>
          </div>
          <MktoForm id="form2" name="Form 2" />
        </div>
      </footer>
    </>
  )
}

function Bubble({ image, i }) {
  const count = i + 1
  return (
    <div className="col-12 col-lg-4 mb-5 mb-xl-0">
      <div className="d-flex flex-column align-items-center mx-3">
        <MktoImage name={`Bubble ${count} Image`}>
          <div>
            <img src={image} alt="bubble" className="mb-4 d-block mx-auto" />
          </div>
        </MktoImage>
        <h5 className="mb-2">
          <MktoText name={'Bubble Header ' + count} />
        </h5>
        <div className="text-center" style={{ maxWidth: 350 }}>
          <MktoText name={'Bubble Text ' + count}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </MktoText>
        </div>
      </div>
    </div>
  )
}

export default App
