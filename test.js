async function getValidateCode(code) {
  try {
    throw new Error("")
    return { message: "Yeah, Success", code };
  } catch (error) {
    return {
      message: error?.message || "Something went wrong, Please try again",
    };
  }
}

getValidateCode(1234)
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
