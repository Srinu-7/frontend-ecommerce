
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../State/Auth/Action";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);

  useEffect(()=>{
      if(jwt){
        dispatch(getUser(jwt))
      }
    },[jwt,auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button className = 'bg-[#9155FD] w-full'
                    variant="contained"
                    type="submit"
                    size = 'large'
                    sx = {{padding : ".8rem 0",bgcolor : "#9155FD",color : "white"}}
            >
                Login
            </Button>
          </Grid>
        </Grid>
      </form>

            <div className = 'flex justify-center flex-col items-center'>
              <div className = 'py-3 flex items-center'>
                  <p>Not Have An Account?</p>
                  <Button onClick = {() => navigate("/register")} className = 'ml-5' size = 'small'>Register</Button>
              </div>
            </div>
    </div>
  );
};

export default LoginForm;
