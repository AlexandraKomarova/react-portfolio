import React from 'react'

export const Contact = () => {
  return (
    <div>
        <div class="container main-wrapper">
            <div class="row">
                <div class="col"></div>
                <div class="col-8 about-me contact">
                    <p>Contact </p>
                </div>
                <div class="col"></div>
            </div>  

            <div class="row">
                <div class="col"></div>
                <div class="col-lg-8">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
                        </div>
            
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Email address</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="youremail@example.com"/>
                        </div>
                        
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
    </div>
  )
}
