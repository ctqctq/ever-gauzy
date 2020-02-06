import {
	PermissionsEnum,
	RolePermissions as IRolePermissions,
	RolesEnum
} from '@gauzy/models';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { Base } from '../core/entities/base';
import { Role } from '../role/role.entity';

@Entity('role_permissions')
export class RolePermissions extends Base implements IRolePermissions {
	@ApiProperty({ type: String, enum: RolesEnum })
	@IsEnum(RolesEnum)
	@IsNotEmpty()
	@Index()
	@Column()
	roleId: string;

	@ApiProperty({ type: String, enum: RolesEnum })
	@IsEnum(PermissionsEnum)
	@IsNotEmpty()
	@Index()
	@Column()
	permission: string;

	@ApiPropertyOptional({ type: Boolean, default: false })
	@Column({ nullable: true, default: false })
	enabled: boolean;

	@ManyToOne(
		(type) => Role,
		(role) => role.rolePermissions
	)
	role!: Role;
}
