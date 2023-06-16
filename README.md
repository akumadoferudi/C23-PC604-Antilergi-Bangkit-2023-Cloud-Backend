<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h1 align="center">ANTILERGI</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Get Articles](#articles)
- [Prerequisites](#prerequisites)
- [Setup and Running](#setup)
- [API Usage in Cloud](#api_cloud)
- [Built Using](#build_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This is the backend part of Antilergi project Bangkit 2023.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Setup and Running](#setup) for notes on how to deploy the project on a live system.

### Prerequisites <a name = "prerequisites"></a>

What things you need to install the software and how to install them.

```
Give examples
```

### Setup and Runnings <a name = "setup"></a>

First things we need to do is installing the dependencies.

Install dependencies

```
npm install
```

Then migrating the database

```
npx sequelize-cli db:migrate
```

Populate seeder

```
npx sequelize-cli db:seed:all
```

Finally, run in dev mode

```
npm run dev
```

Or in production

```
npm start
```

## API Usage in Cloud <a name = "api_cloud"></a>

Get all articles

```
https://antilergi-rfecm4tszq-et.a.run.app/articles
```

Search articles base on title

```
https://antilergi-rfecm4tszq-et.a.run.app/articles/search/[your-search]
```

Change [your-search] in to what title you want to search

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Sequelize](https://sequelize.org/) - Database ORM
- [Express](https://expressjs.com/) - Server Framework

- [NodeJs](https://nodejs.org/en/) - Server Environment
