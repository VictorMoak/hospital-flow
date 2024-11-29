
    const formAtendimento = document.getElementById('formAtendimento');
    const historicoAtendimentos = document.getElementById('historicoAtendimentos').querySelector('tbody');
    formAtendimento.addEventListener('submit', (e) => {
      e.preventDefault();
      const paciente = document.getElementById('paciente').value;
      const descricao = document.getElementById('descricao').value;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${paciente}</td>
        <td>${descricao}</td>
        <td><button class="btn btn-danger btn-sm">Remover</button></td>
      `;
      row.querySelector('button').addEventListener('click', () => {
        row.remove();
      });
      historicoAtendimentos.appendChild(row);
      alert('Atendimento criado com sucesso!');
      formAtendimento.reset();
    });

