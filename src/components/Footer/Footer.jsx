import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <ul className="footer__nav-item nav-passengers">
          <li>
            <b>Пасажирам</b>
          </li>
          <li>Розклад рейсів</li>
          <li>Замовлення послуг</li>
          <li>Контактна інформація</li>
          <li>Політика конфіденційності</li>
          <li>Форма відгуків та пропозицій</li>
        </ul>
        <ul className="footer__nav-item nav-partners">
          <li>
            <b>Партнерам</b>
          </li>
          <li>Головна</li>
          <li>Наземне обслуговування</li>
          <li>Характеристики аеродрому</li>
          <li>Учбовий центр</li>
          <li>Вакансії</li>
        </ul>
        <ul className="footer__nav-item nav-press">
          <li>
            <b>Пресцентр</b>
          </li>
          <li>Головна пресцентру</li>
          <li>Останні новини</li>
          <li>Соціальні та артпроекти</li>
          <li>Фінансова звітність</li>
          <li>Статистика пасажиропотоку</li>
        </ul>
        <div>
          <div>
            <b>Авіадовідка</b>
          </div>
          <div className="footer__tel">+38 (044) 500 49 73</div>
          <div>
            <b>Приєднуйтесь до нас</b>
          </div>
          <div className="footer__icons">
            <i class="fa-brands fa-facebook-f footer__icon"></i>
            <i class="fa-brands fa-twitter footer__icon"></i>
            <i class="fa-brands fa-instagram footer__icon"></i>
            <i class="fa-brands fa-youtube footer__icon"></i>
            <i class="fa-brands fa-linkedin-in footer__icon"></i>
            {/* <img
              className="social__icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01MzY0IDExMTAgMzAgMzAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJGYWNlYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNjQgMTExMCkiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNDU4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDU4IiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTkwLjE2NywzMFYxNi4zMzNoNC42NjdMOTUuNSwxMUg5MC4xNjdWNy42NjdjMC0xLjUuNS0yLjY2NywyLjY2Ny0yLjY2N2gyLjgzM1YuMTY3Qzk1LC4xNjcsOTMuMzMzLDAsOTEuNSwwYy00LDAtNi44MzMsMi41LTYuODMzLDd2NEg4MHY1LjMzM2g0LjY2N1YzMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03Mi41IDApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="Facebook"
            />
            <img className="social__icons" src="Twitter" alt="Twitter" />
            <img
              className="social__icons"
              src="/img/instagram.svg"
              alt="Instagram"
            />
            <img
              className="social__icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01MzAzIDExMTIuMDc0IDM3LjI3NSAyNi4wOTgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJFeGNsdXNpb25fMjgiIGRhdGEtbmFtZT0iRXhjbHVzaW9uIDI4IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC42MzcsMjYuMWMtLjExNiwwLTExLjY3MS0uMDA5LTE0LjU4NS0uOEE0LjY3NSw0LjY3NSwwLDAsMSwuNzY3LDIyLjAxNUMuMDA5LDE5LjE2MiwwLDEzLjExMSwwLDEzLjA1Uy4wMDksNi45NjguNzY3LDQuMDgzQTQuNzgzLDQuNzgzLDAsMCwxLDQuMDUzLjc2N0M2LjkzNi4wMDksMTguNTIxLDAsMTguNjM3LDBzMTEuNy4wMDksMTQuNTg1LjhhNC42NzUsNC42NzUsMCwwLDEsMy4yODUsMy4yODVjLjc4OCwyLjg4My43NjgsOC45MzYuNzY3LDlzLS4wMDksNi4wODItLjc2Nyw4Ljk2NWE0LjY3Myw0LjY3MywwLDAsMS0zLjI4NSwzLjI4NUMzMC4zMzcsMjYuMDg5LDE4Ljc1NCwyNi4xLDE4LjYzNywyNi4xWk0xNC41NjYsNy4wNTJ2MTJsMTAuNDE0LTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMwMyAxMTEyLjA3NCkiLz4KPC9zdmc+Cg=="
              alt="Youtube"
            />
            <img
              className="social__icons"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjMuOTk0IDI0di0uMDAxaC4wMDZ2LTguODAyYzAtNC4zMDYtLjkyNy03LjYyMy01Ljk2MS03LjYyMy0yLjQyIDAtNC4wNDQgMS4zMjgtNC43MDcgMi41ODdoLS4wN3YtMi4xODVoLTQuNzczdjE2LjAyM2g0Ljk3di03LjkzNGMwLTIuMDg5LjM5Ni00LjEwOSAyLjk4My00LjEwOSAyLjU0OSAwIDIuNTg3IDIuMzg0IDIuNTg3IDQuMjQzdjcuODAxeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibS4zOTYgNy45NzdoNC45NzZ2MTYuMDIzaC00Ljk3NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiLz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yLjg4MiAwYy0xLjU5MSAwLTIuODgyIDEuMjkxLTIuODgyIDIuODgyczEuMjkxIDIuOTA5IDIuODgyIDIuOTA5IDIuODgyLTEuMzE4IDIuODgyLTIuOTA5Yy0uMDAxLTEuNTkxLTEuMjkyLTIuODgyLTIuODgyLTIuODgyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPjwvZz48L3N2Zz4K"
              alt="Linkedin"
            /> */}
          </div>
        </div>
      </div>
      <div className="footer__copyrights">
        <div>
          <p>© 2011-2021</p>
          <p>Міжнародний аеропорт «Київ»</p>
        </div>
        <div>
          <p>
            Part of <b>Ufuture</b>
          </p>
          <p>
            <b>Investment Group</b>
          </p>
        </div>
        <div>
          <p>Розробка сайту</p>
          <p>smp/solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
