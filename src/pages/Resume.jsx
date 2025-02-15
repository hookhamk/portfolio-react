export default function Resume() {
    return (
      <div className="container pt-4">
        <h2>Kelly Hookham</h2>
        <p>
          As an experienced HR professional and passionate software developer, I am
          excited to help you navigate your HR and software needs. 
        </p>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Human Resources</h3>
                  <p className="lead mb-0">
                    SHRM Senior Certified Professional, over 10 years supporting small to large companies.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Programming</h3>
                  <p className="lead mb-0">
                    Currently powering through a software bootcamp - proving an ability for fast learning and excitement to keep learning!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Highly Creative</h3>
                  <p className="lead mb-0">
                    After years in Sales and editing resources for ease of use/knowledge transfer. I am proud help others get their message across with some creative thinking!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
          Together we can keep growing and make wonderful things!
        </p>
      </div>
    );
  }