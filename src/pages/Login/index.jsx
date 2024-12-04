import { Button, Card, Input } from "antd";
import Meta from "antd/es/card/Meta";
import LogoApp from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-slate-100">
      <Card style={{ width: 400 }} className="m-auto shadow-xl" >
      <img src={LogoApp} className="w-1/2 mx-auto" />
      <Meta
        className="pb-3 text-center"
        title="Knee Check"
        description="Selamat datang di Knee Check. Silahkan login atau daftar terlebih dahulu untuk melanjutkan!"
        />
        <form action="">
        <Input className="my-2" type="email" placeholder="Masukkan Email"></Input>
        <Input className="my-2" type="password" placeholder="Masukkan Password"></Input>
        <Button type="primary" className="w-full" typeof="submit">Login</Button>
        </form>
        <p className="p-2 text-center">Belum punya akun? Klik <Link to={"/"}>register disini!</Link></p>
      </Card>
    </div>
  );
}

export default LoginPage;