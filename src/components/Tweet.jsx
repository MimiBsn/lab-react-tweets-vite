import { ProfileImage } from "./ProfileImage";
import { User } from "./User";
import { TimeStamp } from "./TimeStamp";
import { Message } from "./Message";
import { Actions } from "./Actions";

function Tweet({tweetsArray}) {
  console.log(tweetsArray)
  return (
    <div className="tweet">
      
      <ProfileImage image={tweetsArray.user.image} />

      <div className="body">
        <div className="top">

          <User name={tweetsArray.user.name} handle={tweetsArray.handle} />
          <TimeStamp time={tweetsArray.timestamp} />

        </div>

        <p className="message">
          <Message message={tweetsArray.message}/>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
