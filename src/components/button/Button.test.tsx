import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BtnDefault from './Button';
import AddIcon from '@mui/icons-material/Add';

describe('BtnDefault', () => {
  it('deve renderizar botão solid com texto', () => {
    render(
      <BtnDefault type="solid" color="emerald">
        Clique Aqui
      </BtnDefault>
    );
    
    expect(screen.getByText('Clique Aqui')).toBeInTheDocument();
  });

  it('deve renderizar botão outline', () => {
    render(
      <BtnDefault type="outline" color="emerald">
        Botão Outline
      </BtnDefault>
    );
    
    expect(screen.getByText('Botão Outline')).toBeInTheDocument();
  });

  it('deve renderizar botão ghost (none) com ícone', () => {
    render(
      <BtnDefault type="none" color="emerald">
        <AddIcon data-testid="icon" />
      </BtnDefault>
    );
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});