import { Button, Card, Input } from "antd";
import Meta from "antd/es/card/Meta";

const LoginPage = () => {
  return (
      <Card style={{ width: 400 }} >
      <img alt="" />
      <Meta
        className="pb-3"
        title="KneeCheck"
        description="Selamat datang di Knee Check. Silahkan login atau daftar terlebih dahulu untuk melanjutkan"
      />
      <Input className="my-2" type="email" placeholder="Masukkan Email"></Input>
      <Input className="my-2" type="password" placeholder="Masukkan Password"></Input>
      <Button type="primary" className="w-full">Login</Button>
      <p className="p-2">Belum punya akun? Klik <a href="">register disini!</a></p>
    </Card>
  );
}

export default LoginPage;