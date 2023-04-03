import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titelInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titelInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titelInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="text" id="image" ref={imageInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            ref={addressInputRef}
            required
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            ref={descriptionInputRef}
            required
          ></input>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
