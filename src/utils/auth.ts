import axios from "axios";
import { API_URL } from "../constants/constants";

export class Auth {
  constructor() {}

  login(username: string, password: string, expiresInMins: number = 60): void {
    if (!this.token.get()) {
      axios
        .post(`${API_URL}/auth/login`, {
          username,
          password,
          expiresInMins,
        })
        .then((res: any) => {
          const { data } = res;
          console.log(data);
          this.token.set(data.accessToken);
          this.refreshToken.set(data.refreshToken);
        })
        .catch((err) => {
          console.error(err);
          this.token.remove();
        });
    } else {
    }
  }

  refreshToken = {
    get(): string | null {
      return localStorage.getItem("refreshToken");
    },

    set(newRefreshToken: string): void {
      localStorage.setItem("refreshToken", newRefreshToken);
    },

    remove(): void {
      localStorage.removeItem("refreshToken");
    },
  };

  token = {
    get(): string | null {
      return localStorage.getItem("token");
    },

    set(newToken: string): void {
      localStorage.setItem("token", newToken);
    },

    remove(): void {
      localStorage.removeItem("token");
    },
  };

  async getMyInfo(): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${this.token.get()}`,
        },
      });

      return res;
    } catch (err: any) {
      if (err.response.status === 401) {
        this.token.remove();
        this.refreshToken.remove();
      }
      console.error(err);
    }
  }
}
