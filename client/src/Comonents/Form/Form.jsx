import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './style'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { createPost , updatePost} from '../../Redux/actions/post';

const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles()
    // const user = JSON.parse(localStorage.getItem("profile"));
    // const name_user = user?.result.name;
    const post = useSelector(( state)=> currentId ?state.posts.find((p)=>p._id === currentId):null);
    const [postData , setPostData] = useState({
      creator:"",
      title: '',
       message: '', 
       tags: '', 
       selectedFile: ''
    })
    const dispatch = useDispatch()
    useEffect(()=>{
      if(post) setPostData(post)
    },[post])

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(currentId){
        dispatch(updatePost(currentId,postData))
      }
      else{
      dispatch(createPost(postData))
      }
      clear()

    }
    const clear = () => {
      setCurrentId(null)
      setPostData({  creator:"", title: '', message: '', tags: '', selectedFile: '' });
    };
    return (
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory </Typography>
         <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> 
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button  className={classes.buttonClear}  variant="contained"  size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    )
}

export default Form
