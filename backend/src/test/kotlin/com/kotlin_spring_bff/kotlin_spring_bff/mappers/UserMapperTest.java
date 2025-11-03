package com.kotlin_spring_bff.kotlin_spring_bff.mappers;

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User;
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

public class UserMapperTest {
    private final UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    @Test
    void shouldMapToDTO() {
        User user = new User();
        user.setId(UUID.randomUUID());
        user.setFirstName("firstName");
        user.setLastName("lastName");
        user.setEmail("lastName");

        UserDTO userDTO = userMapper.toDto(user);

        assertThat(userDTO).isNotNull();
        assertThat(userDTO.getId()).isEqualTo(user.getId());
        assertThat(userDTO.getFirstName()).isEqualTo(user.getFirstName());
        assertThat(userDTO.getLastName()).isEqualTo(user.getLastName());
        assertThat(userDTO.getEmail()).isEqualTo(user.getEmail());
    }


    @Test
    void shouldMapToUser() {
        UserDTO userDto = new UserDTO();
        userDto.setId(UUID.randomUUID());
        userDto.setFirstName("firstName");
        userDto.setLastName("lastName");
        userDto.setEmail("lastName");

        User user = userMapper.toUser(userDto);

        assertThat(user).isNotNull();
        assertThat(user.getId()).isEqualTo(userDto.getId());
        assertThat(user.getFirstName()).isEqualTo(userDto.getFirstName());
        assertThat(user.getLastName()).isEqualTo(userDto.getLastName());
        assertThat(user.getEmail()).isEqualTo(userDto.getEmail());
    }
}
