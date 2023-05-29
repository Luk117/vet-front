import React from 'react';
import styled from 'styled-components'

const TextBody = () => {
  return (
    <Container>
        <h4>Misión</h4>
        <p>
            Nuestra misión es proporcionar atención veterinaria de alta calidad y compasiva, enfocada en el bienestar y la salud de las mascotas. Nos esforzamos por establecer relaciones duraderas con nuestros clientes y sus compañeros peludos, brindando servicios excepcionales y educación para promover una vida feliz y saludable.
        </p>
        <h4>Visión</h4>
        <p>
            Nuestra visión es ser reconocidos como líderes en la industria veterinaria, brindando un estándar de excelencia en el cuidado de las mascotas. Nos esforzamos por ser una clínica innovadora y confiable, que se destaque por la atención personalizada, la tecnología de vanguardia y el compromiso inquebrantable con el bienestar animal.
            </p>
    </Container>
  );
};


export default TextBody;

const Container = styled.main`
  margin-top: 50px;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #1F3D44;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;