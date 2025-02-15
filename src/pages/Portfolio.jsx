import Card from "../components/card";

export default function Portfolio() {
   return (
      <div className="container pt-4">
        <hr>Bootcamp Challenges</hr>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                    <ul id='cards' className="lead mb-0">
                      <Card id={1} name={'Card Crush'} text={'A web app that lets users save and review flashcards through local storage.'} url1={'https://ant-codes-42.github.io/card-crush'} url2={'https://github.com/hookhamk/card-crush'}></Card>

                      <Card id={2} name={'Polished README'} text={'A CLI application for generating a professional ReadMe file. This has not been deployed'} url1={'#'} url2={'https://github.com/hookhamk/Polished_ReadMe'}></Card>

                      <Card id={3} name={'Vehicle App'} text={'A CLI application that provides responses for different vehicles based on user input. This has not been deployed.'} url1={'#'} url2={'https://github.com/hookhamk/Vehicle_App'}></Card>

                      <Card id={4} name={'Employee Tracker'} text={'A CLI application to update and view a workforce database. This has not been deployed.'} url1={'#'} url2={'https://github.com/hookhamk/employee_tracker'}></Card>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};