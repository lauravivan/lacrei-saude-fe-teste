"use client";

type ProfessionalsType = {
  professional: Professional;
};

export default function Professionals({ professional }: ProfessionalsType) {
  return (
    <article>
      <div>
        <img />
      </div>
      <div>
        <div>
          <h3>{professional.name}</h3>
          <p>
            {professional.specialty}, {professional.crm}
          </p>
          <div></div>
          <div></div>
          <details>
            <summary>Informações</summary>
            <p>{professional.bio}</p>
          </details>
        </div>
        <div>
          <button>Atendimentos</button>
        </div>
      </div>
    </article>
  );
}
