import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';


function EmailList() {
    const [ emails, setEmails ] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot
        (snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);

  return (
    <div className='emailList '>
       <div className='emailList__settings'>
            <div className='emailList__settingsLeft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className='emailList__setttingsRight'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>  

            <div className='emailList__sections'>
                <Section Icon={InboxIcon} title='primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotion' color='green' />
            </div>

            <div className="emailList__List"> 
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()} // Multiply by 1000 to convert seconds to milliseconds
                    />
                ))}
                <EmailRow
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10pm"     
                />
                <EmailRow
                    title="Up UP"
                    subject="Great New"
                    description="This is the level"
                    time="7pm"
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
                <EmailRow
                    title="Easy"
                    subject="Hey fellow streamer!!!"
                    description="This is Dope"
                    time="11am"     
                />
            </div>
    </div>
  )
}

export default EmailList;