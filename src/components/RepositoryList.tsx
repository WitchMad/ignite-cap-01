import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'
import { useEffect, useState } from 'react';

interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
  }
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos").then(response => {
      response.json().then((data: IRepository[]) => {
        setRepositories(data);
      })
    })
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repo => (
            <RepositoryItem key={repo.id} repository={{
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              owner: {
                avatar_url: repo.owner.avatar_url,
                login: repo.owner.login,
              }
            }}
            />
          ))}
      </ul>
    </section>
  );
}

export default RepositoryList;