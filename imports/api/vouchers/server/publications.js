import { Vouchers } from '../vouchers'
import { Restaurantes } from '/imports/api/restaurantes/restaurantes'
import { Produtos } from '/imports/api/produtos/produtos'
import { Promocoes } from '/imports/api/promocoes/promocoes'
Meteor.publish('vouchers', function() {
	return Vouchers.find();
});


export default function() {
	Meteor.publishComposite('vouchers.meusVouchers', function() {
		const userId = this.userId
		return {
			find() {
				return Vouchers.find({
					ownerId: userId
				})
			},
			children: [{
				find(voucher) {
					const { restauranteId } = voucher
					return Restaurantes.find(restauranteId)
				}
			}, {
				find(voucher) {
					const { promocaoId } = voucher
					return Promocoes.find(promocaoId)
				}
			}]
		}
	})

	Meteor.publishComposite('vouchers.vouchersValidados', function() {
		const userId = this.userId
		return {
			find() {
				return Vouchers.find({
					validadoPor: userId
				})
			},
			children: [{
				find(voucher) {
					const { produtoSelecionado } = voucher
					return Produtos.find(produtoSelecionado)
				}
			}, {
				find(voucher) {
					const { ownerId } = voucher
					return Meteor.users.find(ownerId)
				}
			}]
		}
	})

	Meteor.publishComposite('vouchers.single', function({ voucherId }) {
		const userId = this.userId
		return {
			find() {
				return Vouchers.find({
					_id: voucherId
				})
			}
		}
	})
}
