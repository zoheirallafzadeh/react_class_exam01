import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import usePost from "../../../hooks/usePost";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../App";

export default function RegisterTab() {
  const { updateUserInfo } = useApp();
  const router = useNavigate();

  const { callPost, isLoading } = usePost("/users/register");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      family: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    const res = await callPost(data);
    if (res?.success) {
      updateUserInfo(res?.data?.user, res?.data?.token);
      toast("Register successfully", { type: "success" });
      router("/");
    } else {
      toast(res?.message || "Register is failed ...", { type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} mt={4} sx={{ maxWidth: 500 }}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <TextField
              size="small"
              label="Name"
              error={!!fieldState.error}
              {...field}
            />
          )}
        />
        <Controller
          name="family"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <TextField
              size="small"
              label="Family"
              error={!!fieldState.error}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              size="small"
              label="Phone"
              error={!!fieldState.error}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+$/i,
          }}
          render={({ field, fieldState }) => (
            <TextField
              type="email"
              size="small"
              label="Email"
              error={!!fieldState.error}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <TextField
              type="password"
              size="small"
              label="Password"
              error={!!fieldState.error}
              {...field}
            />
          )}
        />
      </Stack>
      <Button
        disabled={isLoading}
        type="submit"
        sx={{ mt: 4 }}
        variant="contained"
      >
        Register
      </Button>
    </form>
  );
}
