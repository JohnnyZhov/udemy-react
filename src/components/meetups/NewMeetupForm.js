import Card from "../../ui/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label> //conect label to the title for screenreaders
            <input type="text" required id="title"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label> //conect label to the title for screenreaders
            <input type="url" required id="image"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label> //conect label to the title for screenreaders
            <input type="text" required id="address"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Meetup description</label> //conect label to the title for screenreaders
            <textarea id="description" required rows='5'></textarea> //required for in browser validation
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
