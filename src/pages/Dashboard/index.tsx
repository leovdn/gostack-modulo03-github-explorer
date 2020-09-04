import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios do Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
            alt="Leovdn"
          />
          <div>
            <strong>Leovdn/explorer</strong>
            <p>Repositório em React para exploração do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
            alt="Leovdn"
          />
          <div>
            <strong>Leovdn/explorer</strong>
            <p>Repositório em React para exploração do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4"
            alt="Leovdn"
          />
          <div>
            <strong>Leovdn/explorer</strong>
            <p>Repositório em React para exploração do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
