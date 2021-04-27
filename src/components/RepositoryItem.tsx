interface IProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
      login: string;
    }
  }
}

const RepositoryItem: React.FC<IProps> = ({ repository }) => {
  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url} target="blank">Acessar repositório</a>
      <div className="thumb">
        <span>
          {repository?.owner?.login}
        </span>
        <span className="img" style={{ backgroundImage: `url(${repository.owner.avatar_url})` }}></span>
      </div>
    </li>
  );
}

export default RepositoryItem;