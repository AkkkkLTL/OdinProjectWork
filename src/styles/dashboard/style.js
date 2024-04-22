import styled from "styled-components";

export const DashboardAppStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  grid-template-columns: 1fr 7fr;
  width: 100%;
  height: 100%;

  .shadow {
    width: 100%;
    height: 1px;
    border: 2px;
    box-shadow: 0px 2px 2px grey;
  }

  .content-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: rgba(0, 0, 1, 0.2);
    gap: 50px;

    padding: 20px 30px 50px;

    .projects {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;

      display: flex;
      flex-direction: column;

      .MutiColList {
        flex-grow: 1;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

    .announce {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .content {
        background-color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        .item {
          display: flex;
          flex-direction: column;
          .h1 {
            font-weight: bold;
          }
          .h2 {
            color: grey;
          }
        }
        hr {
          width: 100%;
          height: 0.2px;
          background-color: rgba(0, 0, 1, 0.2);
        }
      }
    }

    .trend {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .content {
        background-color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
      }

      .item {
        display: flex;
        gap: 20px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
        .dict {
          display: flex;
          flex-direction: column;
          .h1 {
            font-weight: bold;
          }
          .h2 {
            color: grey;
          }
        }
      }
    }
  }
`

export const SiderBarStyle = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  gap: 45px;

  background-color: skyblue;
  color: white;
  font-weight: 500;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 50px;

  .head {
    img {
      height: 50px;
    }
    font-size: 27px;
  }

  .item,
  .head {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
  }

  .item {
    padding-left: 30px;
    img {
      height: 20px;
    }
    font-size: 15px;
  }

  .function,
  .setting {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px 30px;
  justify-content: center;

  .top {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
      gap: 20px;
      justify-content: space-around;
      align-items: center;

      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
      .name {
        font-weight: bold;
      }
      .bell {
        height: 25px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .personal {
      display: flex;
      gap: 20px;
      align-items: center;
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .greet {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 12px;
        .name {
          font-size: 18px;
        }
      }
    }

    .btnGroup {
      display: flex;
      gap: 20px;
      justify-content: space-around;
      button {
        border-radius: 50px;
        width: 100px;
        background-color: skyblue;
        color: white;
      }
    }
  }
`

export const CardStyle = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: inset 10px 0 orange;

  padding: 30px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-weight: bold;
    font-size: 20px;
  }
  .dict {
    font-weight: 500;
    color: grey;
  }

  .btnGroup {
    display: flex;
    justify-content: right;
    gap: 20px;
    img {
      width: 25px;
    }
  }
`